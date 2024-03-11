/** @format */
"use client";
import React from "react";
import Input from "./Input";
import TerminosCondiciones from "./TerminosCondiciones";
import { useFormik } from "formik";
import { z, ZodError } from "zod";
import swal from "sweetalert";

export default function Form() {
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/12ca030b-28e7-4cb5-a67b-3bd0ea264eff", {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({ name: "", email: "", empresa: "", rubro: "", message: "" })
    );
  };

  const emailSchema = z.object({
    name: z
      .string({
        required_error: "Es requerido",
        invalid_type_error: "Debe ser texto",
      })
      .min(1, { message: "Debe completar el campo" }),
    email: z
      .string({
        required_error: "Es requerido",
        invalid_type_error: "Debe ser texto",
      })
      .email({ message: "El email ingresado es inválido" }),
    empresa: z
      .string({
        required_error: "Es requerido",
        invalid_type_error: "Debe ser texto",
      })
      .min(1, { message: "Debe completar el campo" }),
    rubro: z
      .string({
        required_error: "Es requerido",
        invalid_type_error: "Debe ser texto",
      })
      .min(1, { message: "Debe completar el campo" }),
    message: z
      .string({
        required_error: "Es requerido",
        invalid_type_error: "Debe ser texto",
      })
      .min(1, { message: "Debe completar el campo" }),
  });

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        empresa: "",
        rubro: "",
        message: "",
      },
      validate: (values) => {
        try {
          emailSchema.parse(values);
        } catch (errors) {
          if (errors instanceof ZodError) return errors.formErrors.fieldErrors;
        }
      },
      onSubmit: (values) => {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });

        fetch("https://getform.io/f/12ca030b-28e7-4cb5-a67b-3bd0ea264eff", {
          method: "POST",
          body: formData,
        })
          .then((res) => {
            res.ok &&
              swal({
                title: "Gracias por contactarte con nosotros",
                text: "Nos pondremos en contacto a la brevedad",
                icon: "success",
              });
          })
          .catch((error) => swal("Error", error, "error"));
      },
    });

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-5'>
          <Input
            error={errors.name && touched.name && errors.name}
            label={"Nombre completo"}
            placeholder={"Bonnie Green"}
            value={values.name}
            name='name'
            id='name'
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            error={errors.email && touched.email && errors.email}
            label={"Email"}
            placeholder={"bonniegreen@gmail.com"}
            value={values.email}
            name='email'
            id='email'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-5 '>
          <Input
            error={errors.empresa && touched.empresa && errors.empresa}
            label={"Empresa"}
            placeholder={"BonnieSRL"}
            value={values.empresa}
            name='empresa'
            id='empresa'
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            error={errors.rubro && touched.rubro && errors.rubro}
            label={"Rubro empresa"}
            placeholder={"Venta de celulares"}
            value={values.rubro}
            name='rubro'
            id='rubro'
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label className='form-control'>
            <div className='label'>
              <span className='label-text text-neutral'>Mensaje</span>
            </div>
            <textarea
              className='h-24 textarea textarea-bordered'
              value={values.message}
              name='message'
              id='message'
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
      </div>

      <div className='w-full my-2 sm:w-full'>
        <TerminosCondiciones />
      </div>

      <button
        type='submit'
        className='flex flex-row items-center w-full text-white shadow-md btn btn-primary'
      >
        Contactar
      </button>
    </form>
  );
}
