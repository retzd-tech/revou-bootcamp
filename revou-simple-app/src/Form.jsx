import React from "react";
import { useForm, Controller } from "react-hook-form";

function MyForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ username, password }) => {
    alert(`Data ${username} and ${password}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          }}
          render={({ field }) => {
            return (
            <>
              <input {...field} placeholder="Put username"/>
              {errors.username && <p>{errors.username.message}</p>}
            </>
          )}}
        />
      </div>

      <div>
        <label>Password:</label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field }) => (
            <>
              <input type="password" {...field} placeholder="Put password" />
              {errors.password && <p>{errors.password.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label>Date of Birth:</label>
        <Controller
          name="dob"
          control={control}
          defaultValue=""
          rules={{
            required: 'Date of Birth is required',
            validate: (value) => {
              const isValidDate = !isNaN(new Date(value));
              return isValidDate || 'Invalid date format';
            },
          }}
          render={({ field }) => (
            <>
              <input {...field} type="date" placeholder="YYYY-MM-DD" />
              {errors.dob && <p>{errors.dob.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default MyForm;
