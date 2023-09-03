type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextAera?: boolean;
  setState: (value: string) => void;
};

const FormField = ({
  type,
  title,
  state,
  placeholder,
  isTextAera,
  setState,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full text-gray-100">{title}</label>
      {isTextAera ? (
      <textarea
        placeholder={placeholder}
        value={state}
        required
        className="form_field-input"
        onChange={(e) => setState(e.target.value)}
      />
      ) : (
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={state}
        required
        className="form_field-input"
        onChange={(e) => setState(e.target.value)}
      />
      )}
    </div>
  );
};

export default FormField;
