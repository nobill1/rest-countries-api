import { FaMoon } from 'react-icons/fa'

const Header = (props: any) => {
    const body = document.body;
    const classBody = body.classList;

    function trigger() {
        classBody.toggle('dark')
    }

    return (
        <>
            <header className="flex justify-between items-center bg-white dark:bg-neutral-700 dark:text-white shadow-md px-4 h-24">
                <p className="font-bold text-xl">Where in the world?</p>
                <button onClick={trigger} className="flex items-center gap-2"><FaMoon /> Dark Mode</button>
            </header>
        </>
    )
}

export default Header;