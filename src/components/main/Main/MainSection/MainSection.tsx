import type { ReactNode } from 'react';

type MainSectionProps = {
    sectionId: string;
    children: ReactNode;
};

export default function MainSection({ sectionId, children }: MainSectionProps) {
    return (
        <section className="main__sections" id={sectionId}>
            {children}
        </section>
    );
}
