import { useState } from "react";

const useOpenModal = () => {
    const [isOpen, setOpen] = useState(true);
    const hadleIsOpen = () => {
        setOpen((prev) => !prev);
    };

    return { isOpen, hadleIsOpen };
};

export default useOpenModal;
