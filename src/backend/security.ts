// Placeholder for security functions, e.g., encryption of local data
export const encryptData = (data: string) => {
    return btoa(data)  // Example of base64 encoding
  }
  
  export const decryptData = (data: string) => {
    return atob(data)  // Example of base64 decoding
  }
  