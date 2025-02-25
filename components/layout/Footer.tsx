export default function Footer() {
    return (
        <footer id="footer" className="w-full h-[90px] flex items-center justify-center dark:bg-dark-blue text-white text-sm">
            <p>
                © {new Date().getFullYear()} Thanaphat Jiamcharoendet. All rights reserved.
            </p>
        </footer>
    );
}
