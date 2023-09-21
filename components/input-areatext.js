export default function InputAreaText({ labelText, id, placeholder, name }) {
  return (
    <div className="flex flex-col gap-1">
      <label for={id} className="font-bold">
        {labelText}
      </label>
      <textarea
        placeholder={placeholder}
        id={id}
        name={name}
        className=" h-[100px] py-2 px-4 rounded-[2px] border-2 hover:border-purple-mid transition-all ease-linear "
      />
    </div>
  );
}
