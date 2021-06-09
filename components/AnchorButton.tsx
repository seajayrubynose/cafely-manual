import Link from "next/link";

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
    <Link href={href}>
      <a>
        <button className={className}>{children && children}</button>
      </a>
    </Link>
  );
};

export default AnchorButton;
