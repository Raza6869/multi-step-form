export default function InputText({ labelText, id, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      <label for={id} className="font-bold">
        {labelText}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name="contact"
        className=" h-[56px] py-2 px-4 rounded-[2px] border-2 hover:border-purple-mid transition-all ease-linear "
      />
    </div>
  );
}
