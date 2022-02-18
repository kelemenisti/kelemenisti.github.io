import React, { useEffect, useState } from 'react';
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext
} from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface FormInput {
  name: string;
  age: number;
  gender: 'male' | 'female';
  items: string[];
}

export function ReactHookForm() {
  const [state, setState] = useState<FormInput>();

  const methods = useForm<FormInput>({
    defaultValues: {
      name: 'istvan',
      age: 30,
      gender: 'male',
      items: ['apple', 'orange']
    }
  });

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors, isValid, isDirty, dirtyFields }
  } = methods;

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setState(data);
    setTimeout(() => {
      setError('name', { message: 'your name sucks' }, { shouldFocus: true });
    }, 3000);
  };

  const onError: SubmitErrorHandler<FormInput> = (errors) => {
    console.log(errors);
  };

  const { fields, remove, append } = useFieldArray({ name: 'items' as never, control });

  const [ageWatch] = watch(['age']);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      <h1>React Hook Form</h1>
      <FormProvider {...methods}>
        {/*<Child />*/}
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Controller
            name={'name'}
            control={control}
            rules={{
              required: 'This is required!',
              pattern: { value: /^[A-Za-z]+$/, message: 'Only letters!' }
            }}
            render={({ field, fieldState }) => (
              <span id="name-input">
                <TextField
                  inputProps={{ 'data-testid': 'name-input' }}
                  variant={'standard'}
                  value={field.value}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message || ''}
                />
              </span>
            )}
          />
          <input
            type={'button'}
            value={'+'}
            onClick={() => {
              const currentValue = getValues('age');
              setValue('age', currentValue + 1, { shouldValidate: true });
            }}
          />
          <Controller
            name={'age'}
            control={control}
            rules={{
              required: 'This is required!',
              min: 18,
              max: 99,
              pattern: { value: /^[0-9]+$/, message: 'Only digits!' }
            }}
            render={({ field, fieldState }) => (
              <TextField
                variant={'standard'}
                value={field.value}
                onChange={field.onChange}
                inputRef={field.ref}
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message || ''}
              />
            )}
          />
          {ageWatch > 35 && <input type={'checkbox'} />}
          <Controller
            name={'gender'}
            control={control}
            render={({ field }) => (
              <FormControl variant={'standard'} sx={{ minWidth: '120px' }}>
                <InputLabel>Gender select</InputLabel>
                <Select value={field.value} onChange={field.onChange} inputRef={field.ref}>
                  <MenuItem value={'female'}>female</MenuItem>
                  <MenuItem value={'male'}>male</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <input type={'button'} value={'+'} onClick={() => append('')} />
          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input {...register(`items.${index}`)} />
                  <input type={'button'} value={'x'} onClick={() => remove(index)} />
                </div>
              );
            })}
          </div>

          <input data-testid={'submit'} id={'submit'} type="submit" />
          <p data-testid={'result'}>Result: {JSON.stringify(state)}</p>
          <p>error: {errors.name?.message}</p>
          <p>error: {errors.age?.message}</p>
          <p>isDirty: {isDirty.toString()}</p>
          <p>isValid: {isValid.toString()}</p>
        </form>
      </FormProvider>
    </div>
  );
}

function Child() {
  const methods = useFormContext();
  const name = methods.watch('name');
  return <p>Hi {name}!</p>;
}
