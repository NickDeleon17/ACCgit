import * as React from "react";
import Box from "@mui/material/Box";
import { Stack, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios'

export default function Form() {
  const personSchema = object({
    first_name: string().required("Gotta hava name").min(2),
    last_name: string().max(10, "Gotta have less than 10 letters")
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(personSchema) });

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value);
    console.log(watch("first_name"));
    console.log(watch("last_name"))
  };

  const onSubmit = (data) => {
    // console.log(data);
    let JSONData = JSON.stringify(data)
    let options = {
        method: "POST",
        body: JSONData
    }
    axios.request(options)
    .then()
    .catch()
    console.log(JSONData)
    reset()
  };

  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="outlined-basic"
        label="first name"
        variant="outlined"
        {...register("first_name")}
        onChange={handleChange}
        helperText={
          errors.first_name && <span>{errors.first_name.message}</span>
        }
        error={errors.first_name !== undefined}
      />

      <TextField
        id="outlined-basic"
        label="last name"
        variant="outlined"
        {...register("last_name")}
        onChange={handleChange}
        helperText={
            errors.last_name && <span>{errors.last_name.message}</span>
        }
        error={errors.last_name !== undefined}
      />

      <TextField id="outlined-basic" label="Something" variant="outlined" />

      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" color="success">
          Submit
        </Button>

        <Button onClick={()=> reset()} variant="contianed" color="error">
          Reset
        </Button>
      </Stack>
    </Box>
  );
}
