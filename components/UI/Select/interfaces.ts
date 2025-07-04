export interface ICheckBoxSelect<T> {
    options: T[];
    value: T[];
    onChange: (value: T[] | T | null) => void;
    singleSelect?: boolean;
}
