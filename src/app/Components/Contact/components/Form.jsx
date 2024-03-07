/** @format */
"use client";
import React, { useState } from "react";
import Input from "./Input";
import TerminosCondiciones from "./TerminosCondiciones";

export default function Form() {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    empresa: "",
    rubro: "",
  });

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/12ca030b-28e7-4cb5-a67b-3bd0ea264eff", {
      method: "POST",
      body: formData,
    }).then(() =>
      setQuery({ name: "", email: "", empresa: "", rubro: "", message: "" })
    );
  };

  return (
    <form onSubmit={formSubmit} method='POST' className='w-full'>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-5'>
          <Input
            label={"Nombre completo"}
            placeholder={"Bonnie Green"}
            value={query.name}
            name='name'
            id='name'
            onChange={handleParam()}
            required
          />
          <Input
            label={"Email"}
            placeholder={"bonniegreen@gmail.com"}
            value={query.email}
            name='email'
            id='email'
            onChange={handleParam()}
            required
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-5 '>
          <Input
            label={"Empresa"}
            placeholder={"BonnieSRL"}
            value={query.empresa}
            name='empresa'
            id='empresa'
            onChange={handleParam()}
            required
          />
          <Input
            label={"Rubro empresa"}
            placeholder={"Venta de celulares"}
            value={query.rubro}
            name='rubro'
            id='rubro'
            onChange={handleParam()}
            required
          />
        </div>
        <div>
          <label className='form-control'>
            <div className='label'>
              <span className='label-text text-neutral'>Mensaje</span>
            </div>
            <textarea
              className='h-24 textarea textarea-bordered'
              value={query.message}
              name='message'
              id='message'
              onChange={handleParam()}
              required
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
