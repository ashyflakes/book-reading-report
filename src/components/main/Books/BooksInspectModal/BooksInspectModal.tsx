import { useEffect, useRef } from 'react';

type BooksInspectModalProps = {
    image: string | null;
    onClose: () => void;
};

export default function BooksInspectModal({ image, onClose }: BooksInspectModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        if (image) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [image]);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (!dialog) {
            return;
        }

        const handleClose = () => {
            onClose();
        };

        dialog.addEventListener('close', handleClose);

        return () => {
            dialog.removeEventListener('close', handleClose);
        };
    }, [onClose]);

    return (
        <dialog
            ref={dialogRef}
            id="inspect"
            onClick={event => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="inspect__body">
                <figure className="inspect__contents">
                    <img
                        src={image ?? ''}
                        alt="книга, выбранная вами"
                        id="inspect__image"
                        loading="lazy"
                    />
                </figure>
            </div>
        </dialog>
    );
}
