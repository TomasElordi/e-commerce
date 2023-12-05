import "./PopOver.css";
/**
 * A component that displays a popover with a title and content.
 * @param {string} title - The title of the popover.
 * @param {ReactNode} children - The content of the popover.
 * @param {string} [className=""] - The class name for the popover wrapper.
 * @param {string} [classNameContent=""] - The class name for the popover content.
 * @returns {JSX.Element} - The PopOver component.
 */
export default function PopOver({
  title,
  children,
  className = "",
  classNameContent = "",
}) {
  return (
    <div className={`popover__wrapper ${className} cursor-pointer`}>
      <h2 className="popover__title ">{title}</h2>
      <div className={`popover__content ${classNameContent}`}>{children}</div>
    </div>
  );
}
