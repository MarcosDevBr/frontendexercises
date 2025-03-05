function updateData<T extends object>(currentObject: T, newDataObject: Partial<T>): T {
    const updatedObject = { ...currentObject };
    
    Object.keys(currentObject).forEach(key => {
        if (key in newDataObject) {
            const value = newDataObject[key as keyof T];
            if (value !== undefined) {
                updatedObject[key as keyof T] = value;
            }
        }
    });
    
    return updatedObject;
}

export default updateData;