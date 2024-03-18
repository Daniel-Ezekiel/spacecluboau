"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { useForm, ValidationError } from "@formspree/react";
import * as Yup from "yup";
import { FORMSPREE_ID } from "@/constants/formspreeId";
import { useToast } from "@/components/ui/use-toast";
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastViewport,
} from "@/components/ui/toast";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

type TFormValues = {
  firstName: string;
  email: string;
  phone: string;
  message: string;
};

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
    .min(20, "Too Short!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
});

export const ContactForm = () => {
  // const { toast } = useToast();
  const [openToast, setOpenToast] = React.useState(false);
  const timerRef = React.useRef(0);
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const toastIcon = state.succeeded ? (
    <IoCheckmarkCircle className='text-green-500 w-10 h-10' />
  ) : (
    <IoCloseCircle className='text-red-500 w-10 h-10' />
  );
  const descriptionMessage = state.succeeded
    ? "Thank you for your message! We will get back to you shortly."
    : "Error submitting form. Please try again.";

  const submitForm = async (values: TFormValues, resetForm: () => void) => {
    try {
      await handleSubmit(values);
    } catch (error) {
      console.log(error);
    } finally {
      setOpenToast(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpenToast(true);
      }, 1000);
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          submitForm(values, resetForm);
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
                className='mt-1 p-2 rounded-sm bg-transparent border'
              />
              <div className='h-5 mt-2 text-sm text-red-500'>
                {errors.firstName && touched.firstName
                  ? errors.firstName
                  : null}
              </div>
            </div>

            <div className='w-full flex flex-col'>
              <label htmlFor='phone'>
                Phone <span className='text-red-500'>*</span>
              </label>
              <Field
                name='phone'
                type='number'
                className='mt-1 p-2 rounded-sm bg-transparent border'
              />
              <div className='h-5 mt-2 text-sm text-red-500'>
                {errors.phone && touched.phone ? errors.phone : null}
              </div>
            </div>

            <div className='w-full flex flex-col sm:col-span-full'>
              <label htmlFor='email'>
                Email <span className='text-red-500'>*</span>
              </label>
              <Field
                name='email'
                type='email'
                className='mt-1 p-2 rounded-sm bg-transparent border'
              />
              <div className='h-5 mt-2 text-sm text-red-500'>
                {errors.email && touched.email ? errors.email : null}
              </div>
            </div>

            <div className='w-full flex flex-col sm:col-span-full'>
              <label htmlFor='message'>
                Message <span className='text-red-500'>*</span>
              </label>
              <Field
                name='message'
                as='textarea'
                className='mt-1 p-2 h-[15rem] rounded-sm bg-transparent border'
              />
              <div className='h-5 mt-2 text-sm text-red-500'>
                {errors.message && touched.message ? errors.message : null}
              </div>
            </div>

            <button
              type='submit'
              disabled={state.submitting}
              className='bg-primary-gold-light w-full mt-4 p-3 uppercase text-white tracking-wider disabled:bg-gray-400 sm:col-span-full sm:place-self-center'
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
      <>
        <ToastProvider swipeDirection='right'>
          <Toast
            className='bg-primary-dark rounded-md border-primary-gold-dark'
            open={openToast}
            onOpenChange={setOpenToast}
          >
            {toastIcon}
            <ToastDescription className='text-white text-base'>
              {descriptionMessage}
            </ToastDescription>
          </Toast>
          <ToastViewport className='fixed flex flex-col w-full max-w-[100vw] m-0 list-none z-[2147483647] outline-none' />
        </ToastProvider>
      </>
    </>
  );
};
