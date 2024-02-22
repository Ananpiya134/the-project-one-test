import * as RadixDialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";

import { useMemo, useEffect } from "react";
import Dropzone from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import IconSuccess from "@assets/icons/icon-success-tick.svg";
import IconCross from "@assets/icons/icon-cross.svg";
import IconUpload from "@assets/icons/icon-upload.svg";

import { Button } from "@components/button";
import { Input } from "@components/input";
import { Typography } from "@components/typography";

import { cn } from "@/utils/cn";

import type { DialogProps, FormValue } from "./types";

const Dialog = ({
  children,
  isFormSubmit,

  handleSubmitNationalIdCardForm = () => {},
  ...props
}: DialogProps) => {
  const validationSchema = useMemo(() => {
    return yup.object().shape({
      thaiNationalIdCardNo: yup
        .string()
        .required("Thai National ID card no. is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(13, "Thai National ID Card Number must be 13 character")
        .max(13, "Thai National ID Card Number must be 13 character"),
      thaiNationalIdCardImage: yup
        .string()
        .required("Thai National ID card image is required"),
    });
  }, []);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<FormValue>({
    resolver: yupResolver(validationSchema),
  });

  const onDrop = (file: File[]) => {
    console.log(typeof URL.createObjectURL(file[0]));
    setValue("thaiNationalIdCardImage", URL.createObjectURL(file[0]));
  };

  const watchAllField = watch();
  useEffect(() => {
    console.log(watchAllField.thaiNationalIdCardImage);
  }, [watchAllField.thaiNationalIdCardImage]);

  useEffect(() => {
    console.log(errors.thaiNationalIdCardImage?.message);
  }, [errors.thaiNationalIdCardImage?.message]);

  return (
    <RadixDialog.Root {...props}>
      <RadixDialog.Trigger asChild>{children}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black-900 opacity-70" />
        <RadixDialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2",
            "bg-white focus:outline-none",
            "data-[state=open]:animate-contentShow rounded-6 p-6.25",
            "w-134 px-6 pb-12 pt-6"
          )}
        >
          {!isFormSubmit && (
            <div className="mt-10 bg-white px-16  pb-8">
              <div>
                <Typography className="mb-1" variant="heading-l">
                  Verify your Thai National ID
                </Typography>
                <Typography className="text-black-700">
                  We’ll check your information and authenticate you within 5 -7
                  days.
                </Typography>
              </div>
            </div>
          )}
          <div className="px-16">
            {!isFormSubmit ? (
              <Form.Root
                onSubmit={handleSubmit(handleSubmitNationalIdCardForm)}
              >
                <Form.Field name="thaiNationalIdCardNo">
                  <Form.Label asChild htmlFor="thaiNationalIdCardNo">
                    <span className="mb-1 flex gap-0.5 px-2">
                      <Typography className="text-black-900" variant="label-s">
                        Thai National ID number
                      </Typography>
                      <Typography className="text-critical" variant="label-s">
                        *
                      </Typography>
                    </span>
                  </Form.Label>
                  <Controller
                    control={control}
                    name="thaiNationalIdCardNo"
                    render={({ field }) => {
                      return (
                        <Form.Control asChild>
                          <Input
                            {...field}
                            isFullWidth
                            placeholder="Fill your Thai National ID number"
                            onChange={field.onChange}
                            required
                          />
                        </Form.Control>
                      );
                    }}
                  />
                  <div className="mb-0.5 h-4.5">
                    {errors.thaiNationalIdCardNo?.message && (
                      <Typography
                        className="text-critical"
                        variant="paragraph-xs"
                      >
                        {errors.thaiNationalIdCardNo?.message}
                      </Typography>
                    )}
                  </div>
                </Form.Field>
                <Form.Field name="thaiNationalIdCardImage">
                  <Form.Label asChild htmlFor="thaiNationalIdCardImage">
                    <span className="mb-1 flex gap-0.5 px-2">
                      <Typography className="text-black-900" variant="label-s">
                        Thai National ID card Photo
                      </Typography>
                      <Typography className="text-critical" variant="label-s">
                        *
                      </Typography>
                    </span>
                  </Form.Label>
                  <Dropzone onDrop={onDrop} noClick noKeyboard>
                    {({ getRootProps, getInputProps, open, acceptedFiles }) => {
                      return (
                        <div className=" h-50 overflow-hidden border-2 border-dotted border-black-200 object-contain p-4">
                          {acceptedFiles.length ? (
                            <img
                              alt="uploaded photo"
                              src={URL.createObjectURL(acceptedFiles[0])}
                            />
                          ) : (
                            <div
                              {...getRootProps({
                                className:
                                  "dropzone bg-black-50 w-full h-full flex flex-col justify-center items-center",
                              })}
                            >
                              <input {...getInputProps()} />
                              <Button
                                className="mb-3 gap-4 px-4 py-2"
                                variant="primary"
                                onClick={() => open()}
                              >
                                <img
                                  alt="icon-upload"
                                  className="h-3.75 w-3.75"
                                  src={IconUpload}
                                />
                                <Typography
                                  className="text-cream"
                                  variant="label-s"
                                >
                                  Upload
                                </Typography>
                              </Button>
                              <Typography variant="paragraph-m">
                                or Drag photo here
                              </Typography>
                            </div>
                          )}
                        </div>
                      );
                    }}
                  </Dropzone>
                  <div className="mb-0.5 h-4.5">
                    {errors.thaiNationalIdCardImage?.message && (
                      <Typography
                        className="text-critical"
                        variant="paragraph-xs"
                      >
                        {errors.thaiNationalIdCardImage?.message}
                      </Typography>
                    )}
                  </div>
                </Form.Field>
                <Form.Submit asChild>
                  <Button
                    className="w-full rounded-6 px-5 py-3"
                    variant="primary"
                  >
                    <Typography className="text-cream" variant="label-m">
                      Verify
                    </Typography>
                  </Button>
                </Form.Submit>
              </Form.Root>
            ) : (
              <div className="mt-10 bg-white">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success-100">
                  <img
                    alt="icon-success"
                    className="w-9.75 h-9.75"
                    src={IconSuccess}
                  />
                </div>
                <Typography className="mb-1" variant="heading-l">
                  Verification success
                </Typography>
                <Typography className="mb-6" variant="paragraph-m">
                  Let’s explore to the Platform, and thank you for your
                  verification
                </Typography>
                <RadixDialog.Close asChild>
                  <Button
                    className="w-full rounded-6 px-5 py-3"
                    variant="primary"
                  >
                    <Typography className="text-cream" variant="label-m">
                      Continue to Prop
                    </Typography>
                  </Button>
                </RadixDialog.Close>
              </div>
            )}
          </div>

          <RadixDialog.Close asChild>
            <button className="absolute right-6 top-6">
              <img
                alt="icon-close-dialog"
                className="h-3.5 w-3.5"
                src={IconCross}
              />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
