import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  getProducts,
  getSingleProducts,
  deleteProduct as deleteProductApi,
  createProduct as createProductApi,
  updateProduct as updateProductApi,
} from "../../services/ApiProducts";
import { useNavigate } from "react-router";

export function useGetProducts() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return { isLoading, isError, data, error };
}

export function useGetHomeProducts() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["home-products"],
    queryFn: () => getProducts(),
  });
  const homeProducts = data?.slice(0, 4);

  return { isLoading, isError, homeProducts, error };
}

export function useGetSingleProduct(id) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProducts(id),
  });

  return { isLoading, isError, data, error };
}

export function useCreateProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isCreating, mutate: createProduct } = useMutation({
    mutationFn: createProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product created successfully.");
      navigate("/dashboard/products");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProduct };
}

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending: isUpdating, mutate: updateProduct } = useMutation({
    mutationFn: ({ id, newProduct }) => updateProductApi(id, newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully.");
      navigate("/dashboard/products");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateProduct };
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product deleted successfully.");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProduct };
}
