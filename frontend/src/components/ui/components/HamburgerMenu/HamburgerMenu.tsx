import { FunctionComponent, HTMLProps, useState } from 'react'
import styles from './HamburgerMenu.module.css'
import clsx from 'clsx';
import { Hamburger, Modal } from '@components/ui/elements';

interface HamburgerMenuProps extends Omit<HTMLProps<HTMLElement>, 'style'> {
    
}

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = (props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsTransitioning(true)
        setTimeout(() => {
            setIsOpen(prev => !prev) // Cambiar el estado de isOpen usando el valor anterior
            setIsTransitioning(false) // Mover esto dentro del setTimeout
        }, 500); // Cambiar el tiempo a 500ms para que la transición sea más rápida
    }

    return (
        <div>
            <Hamburger 
                onClick={toggleMenu}
                className={clsx(styles.actionButton, { [styles.active]: isOpen })} 
                isActive={isOpen}/>
            {isOpen && (
                <Modal className={clsx(styles.modal, { 
                    [styles.modalOpen]: isOpen,
                    [styles.modalClosing]: isTransitioning && isOpen
                })}>
                    {props.children}
                </Modal>
            )}
        </div>
    )
}

export default HamburgerMenu

