import React, { useState } from 'react';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
  useFormContext
} from 'react-hook-form';

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
    console.log(data);
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

  return (
    <div>
      <h1>React Hook Form</h1>
      <FormProvider {...methods}>
        {/*<Child />*/}
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            {...register('name', {
              required: 'This is required!',
              pattern: { value: /^[A-Za-z]+$/, message: 'Only letters!' }
            })}
            placeholder={'name'}
          />
          <input
            type={'button'}
            value={'+'}
            onClick={() => {
              const currentValue = getValues('age');
              setValue('age', currentValue + 1, { shouldValidate: true });
            }}
          />
          <input
            {...register('age', {
              required: 'This is required!',
              min: 18,
              max: 99,
              pattern: { value: /^[0-9]+$/, message: 'Only digits!' }
            })}
            placeholder={'age'}
          />
          {ageWatch > 35 && <input type={'checkbox'} />}
          <select {...register('gender')}>
            <option value="female">female</option>
            <option value="male">male</option>
          </select>
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

          <input type="submit" />
          <p>Result: {JSON.stringify(state, null, 2)}</p>
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
