import { Eye, Pencil, Trash2 } from "lucide-react";

import Modal from "../../ui/Modal";
import Button from "../../ui/button";
import ViewProduct from "./ViewProduct";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { formatPrice } from "../../utils/helpers";

export default function ProductRow({ product }) {
  const { id, image, name, price, stock } = product;

  const deleteProduct = () => {
    console.log(`Deleting Product with id #${id}...`);
  };

  return (
    <tr className="text-center border-b border-stone-800 *:py-2 *:px-1.5">
      <th>{id}</th>
      <td>
        <img
          src={image}
          alt={`${name} image`}
          className="w-full max-w-[80px] mx-auto"
        />
      </td>
      <td className="font-medium">{name}</td>
      <td className="font-medium">{formatPrice(price)}</td>
      <td>{stock}</td>

      <td>
        <Modal>
          <div className="flex items-center gap-2">
            <Modal.Open opens="view-product">
              <Button variation="secondary" className="!px-1.5">
                <Eye className="size-4" />
              </Button>
            </Modal.Open>

            <Button
              as="link"
              href={`${id}/edit`}
              className="!px-1.5"
              variation="secondary"
            >
              <Pencil className="size-4" />
            </Button>

            <Modal.Open opens="delete-product">
              <Button variation="secondary" className="!px-1.5">
                <Trash2 className="size-4" />
              </Button>
            </Modal.Open>
          </div>

          <Modal.Window name="view-product">
            <ViewProduct product={product} />
          </Modal.Window>
          <Modal.Window name="delete-product">
            <ConfirmDelete
              resourceName="Product"
              handleDelete={deleteProduct}
            />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}
