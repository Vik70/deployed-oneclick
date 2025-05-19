import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, text, activeClasses, className, liClassName }) => {
    const path = usePathname()
    const isActive = path === href
    return (
        <li className={`${liClassName} ${isActive ? 'active' : ''}`}>
            <Link className={`${isActive ? activeClasses : ""} ${className}`} href={href}>{text}</Link>
        </li>
    );
};

export default Navlink;
