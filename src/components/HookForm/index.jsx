import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().min(5),
  password: yup.string().required().min(5),
});

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Reset form after submission
  };

  return (
    <div>
      <h2>Demo React HookForm</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="username"
          label="Tài khoản"
          variant="outlined"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <br />
        <TextField
          id="password"
          label="Mật khẩu"
          type="password"
          variant="outlined"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <br />
        <Button type="submit" variant="contained">
          Xác nhận
        </Button>
      </form>
    </div>
  );
}

export default HookForm;
