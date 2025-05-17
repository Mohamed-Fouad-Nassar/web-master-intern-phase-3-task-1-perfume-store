import Button from "./Button";
import Spinner from "./Spinner";
import { useModalContext } from "./Modal";

export default function ConfirmDelete({
  disabled,
  resourceName,
  handleDelete,
}) {
  const { close } = useModalContext();

  return (
    <div className="flex flex-col min-h-full items-end p-4 text-center sm:items-center sm:p-0">
      <div className="mt-3 text-center sm:mt-0 sm:text-left">
        <p className="text-sm text-stone-300">
          Are you sure you want to delete {resourceName}? All of your data will
          be permanently removed. This action cannot be undone.
        </p>
      </div>

      <div className="bg-transparent w-full pt-5 flex flex-row-reverse justify-center md:justify-start gap-2">
        <Button
          variation="danger"
          disabled={disabled}
          onClick={() => {
            handleDelete();
            close();
          }}
        >
          {disabled ? (
            <div className="flex items-center gap-2">
              <Spinner size={5} />
              <span>Deleting...</span>
            </div>
          ) : (
            "Yes, Delete it!"
          )}
        </Button>
        <Button onClick={close} disabled={disabled} variation="secondary">
          Cancel
        </Button>
      </div>
    </div>
  );
}
