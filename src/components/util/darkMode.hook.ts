import { useState, useEffect } from "react";

function useDarkMode(): [boolean, () => void] {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    // Função para alternar entre light e dark mode
    const toggleDarkMode = (): void => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    // Efeito para verificar e aplicar o modo escuro ao montar o componente
    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode');

        if (darkModePreference === 'dark') {
            document.body.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.body.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    // Efeito para atualizar o localStorage e adicionar/remover a classe do body
    useEffect(() => {
        if (isDarkMode) {
            localStorage.setItem('darkMode', 'dark');
            document.body.classList.add('dark');
        } else {
            localStorage.setItem('darkMode', 'light');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
