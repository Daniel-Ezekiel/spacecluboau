"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  phone: Yup.string()
    .min(10, "Invalid Phone number")
    .max(11, "Invalid Phone number")
    .required("This field is required"),
  message: Yup.string()
    .min(10, "Too Short!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
});

export const ContactForm = () => (
  <Formik
    initialValues={{
      firstName: "",
      email: "",
      phone: "",
      message: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form className='grid gap-2 sm:grid-cols-2'>
        <div className='w-full flex flex-col'>
          <label htmlFor='firstName'>
            Name <span className='text-red-500'>*</span>
          </label>
          <Field
            name='firstName'
            className='mt-2 p-2 rounded-sm bg-transparent border'
          />
          {errors.firstName && touched.firstName ? (
            <div className='mt-2 text-sm text-red-500'>{errors.firstName}</div>
          ) : null}
        </div>

        <div className='w-full flex flex-col'>
          <label htmlFor='phone'>
            Phone <span className='text-red-500'>*</span>
          </label>
          <Field
            name='phone'
            type='number'
            className='mt-2 p-2 rounded-sm bg-transparent border'
          />
          {errors.phone && touched.phone ? (
            <div className='mt-2 text-sm text-red-500 '>{errors.phone}</div>
          ) : null}
        </div>

        <div className='w-full flex flex-col sm:col-span-full'>
          <label htmlFor='email'>
            Email <span className='text-red-500'>*</span>
          </label>
          <Field
            name='email'
            type='email'
            className='mt-2 p-2 rounded-sm bg-transparent border'
          />
          {errors.email && touched.email ? (
            <div className='mt-2 text-sm text-red-500 '>{errors.email}</div>
          ) : null}
        </div>

        <div className='w-full flex flex-col sm:col-span-full'>
          <label htmlFor='message'>
            Message <span className='text-red-500'>*</span>
          </label>
          <Field
            name='message'
            as='textarea'
            className='mt-2 p-2 h-[15rem] rounded-sm bg-transparent border'
          />
          {errors.message && touched.message ? (
            <div className='mt-2 text-sm text-red-500 '>{errors.email}</div>
          ) : null}
        </div>

        <button
          type='submit'
          className='bg-primary-gold-light w-full mt-4 p-3 uppercase text-white tracking-wider sm:col-span-full sm:place-self-center'
        >
          Send Message
        </button>
      </Form>
    )}
  </Formik>
);
