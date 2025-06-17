import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gray-100 p-4 shadow">
            <nav className="flex justify-between">
                <h1 className="font-bold text-xl">Автошкола CITY</h1>
                <ul className="flex gap-4">
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/about">Про нас</Link></li>
                    <li><Link to="/contact">Контакти</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
