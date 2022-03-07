//async (event)  ; on destructuring it becomes async({request})

//For normal fetch post request

// export const post = async ({request}) =>{
// const res = await request.json();
// console.log(res);
// return {};
// }


// for form

export const post = async ({request}) =>{
    const res = await request.formData();
    const email = await res.get('email')
    console.log(email);
    return {};
    }