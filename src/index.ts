export type TMode = 'light' | 'dark';

class Lizard {
    static properties = ['color', 'background', 'background--disabled', 'emphasis', 'emphasis--opacity', 'text', 'text--disabled', 'rgb'];
    static colors = ['red', 'green', 'blue', 'yellow', 'news', 'info', 'brand', 'contrast',
        'contrast--opacity', 'red--opacity', 'green--opacity', 'blue--opacity', 'yellow--opacity',
        'news--opacity', 'info--opacity', 'brand--opacity', 'contrast--opacity',
        'red-rgb', 'green-rgb', 'yellow-rgb', 'blue-rgb'];
    static images = ['empty', 'empty-chart'];

    private v = [...Lizard.properties, ...Lizard.colors, ...Lizard.images];

    constructor() { };

    private _mode: TMode;

    public get mode(): TMode {
        return this._mode;
    }

    public get brand(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--brand');
    }

    public get contrast(): string {
        return getComputedStyle(document.documentElement).getPropertyValue('--contrast');
    }

    public get colors() {
        return {
            color: getComputedStyle(document.documentElement).getPropertyValue('--color').trim(),
            text: getComputedStyle(document.documentElement).getPropertyValue('--text').trim(),
            emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis').trim(),
            red: getComputedStyle(document.documentElement).getPropertyValue('--red').trim(),
            green: getComputedStyle(document.documentElement).getPropertyValue('--green').trim(),
            blue: getComputedStyle(document.documentElement).getPropertyValue('--blue').trim(),
            yellow: getComputedStyle(document.documentElement).getPropertyValue('--yellow').trim(),
            opacity: {
                emphasis: getComputedStyle(document.documentElement).getPropertyValue('--emphasis--opacity').trim(),
                red: getComputedStyle(document.documentElement).getPropertyValue('--red--opacity').trim(),
                green: getComputedStyle(document.documentElement).getPropertyValue('--green--opacity').trim(),
                blue: getComputedStyle(document.documentElement).getPropertyValue('--blue--opacity').trim(),
                yellow: getComputedStyle(document.documentElement).getPropertyValue('--yellow--opacity').trim()
            }
        }
    }

    public set(mode: TMode): void {
        const root = document.documentElement;
        this._mode = mode;
        this.v.forEach(v => root.style.setProperty(`--${v}`, `var(--${v}-${mode})`));
    }

    public setBrand(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--brand', color)
    }

    public setContrast(color: string): void {
        const root = document.documentElement;
        root.style.setProperty('--contrast', color)
    }
}

export default Lizard;