interface MyProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
}

const AnchorButton = ({
  children,
  href,
  className = "default-btn",
}: MyProps) => {
  return (
    <button
      onClick={() => {
        window.location.href = href;
      }}
      onMouseUp={(e) => {
        if (e.button === 1) {
          window.open(href, "_blank");
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
};

export default AnchorButton;
