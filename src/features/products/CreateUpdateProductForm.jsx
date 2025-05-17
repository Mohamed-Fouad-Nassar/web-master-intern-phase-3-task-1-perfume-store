import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";

import { useCreateProduct, useUpdateProduct } from "./useProducts";

export default function CreateUpdateProductForm({ product = {} }) {
  const { id: updateID, ...updateValues } = product;
  const isUpdateSession = updateID ? true : false;

  const { isCreating, createProduct } = useCreateProduct();
  const { isUpdating, updateProduct } = useUpdateProduct();

  const isSubmitting = isCreating || isUpdating;

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });

  function submitForm(data) {
    const product = {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
    };

    if (isUpdateSession) updateProduct({ id: updateID, newProduct: product });
    else {
      createProduct(product);
      reset();
    }
  }

  return (
    <form className="max-w-2xl mx-auto" onSubmit={handleSubmit(submitForm)}>
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          type="text"
          disabled={isSubmitting}
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters",
            },
          })}
        />
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          rows={5}
          id="description"
          disabled={isSubmitting}
          {...register("description", {
            required: "This field is required",
            minLength: {
              value: 10,
              message: "Description should be at least 10 characters",
            },
            maxLength: {
              value: 200,
              message: "Description should be at most 100 characters",
            },
          })}
          className="px-2.5 py-1.5 border border-stone-600 rounded outline-none focus:border-main disabled:opacity-50"
        />
      </FormRow>
      <FormRow label="Price" error={errors?.price?.message}>
        <Input
          id="price"
          type="number"
          {...register("price", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Price can't be less than 0",
            },
            max: {
              value: 1000,
              message: "Price should be at most 1000",
            },
          })}
        />
      </FormRow>
      <FormRow label="Stock" error={errors?.stock?.message}>
        <Input
          id="stock"
          type="number"
          {...register("stock", {
            required: "This field is required",
            min: {
              value: 0,
              message: "Stock can't be less than 0",
            },
            max: {
              value: 1000,
              message: "Stock should be at most 1000",
            },
          })}
        />
      </FormRow>
      <FormRow label="Image" error={errors?.image?.message}>
        <Input
          id="image"
          type="text"
          {...register("image", { required: "This field is required" })}
        />
      </FormRow>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="px-6 flex items-center gap-2 ms-auto"
      >
        {isSubmitting ? (
          <>
            <Spinner size={5} />
            <span>Submitting...</span>
          </>
        ) : isUpdateSession ? (
          "Update Product"
        ) : (
          "Create Product"
        )}
      </Button>
    </form>
  );
}
