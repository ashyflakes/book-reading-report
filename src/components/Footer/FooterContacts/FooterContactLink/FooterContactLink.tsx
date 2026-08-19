import type { ReactNode } from 'react';

type FooterContactLinkProps = {
    href: string;
    name: string;
    icon: ReactNode;
};

export default function FooterContactLink({ href, name, icon }: FooterContactLinkProps) {
    return (
        <a href={href} className="contacts__links" rel="noopener noreferrer" target="_blank">
            {icon}

            <span className="contacts-name">{name}</span>
        </a>
    );
}
