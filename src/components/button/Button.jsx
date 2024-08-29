// eslint-disable-next-line react/prop-types
const Button = ({ btnLabel, onClick, btnStatus = false }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        !btnStatus
          ? "bg-cyan-500 hover:bg-cyan-600"
          : "bg-orange-500 hover:bg-orange-600"
      } py-2 px-5 active:bg-cyan-900 active:text-white text-lg font-semibold text-slate-800 rounded-md `}
    >
      {btnLabel}
    </button>
  );
};

export default Button;
