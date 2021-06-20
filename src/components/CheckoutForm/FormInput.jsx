import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext(); //hook

    // return (
    //     <Grid item xs={12} sm={6}>
    //         <Controller 
    //             as={TextField}
    //             control={control}
    //             fullWidth
    //             name={name}
    //             label={label}
    //             required={required}
    //         />
    //     </Grid>
    // ) 
    //此寫法已無法用

    return (
        <Grid item xs={12} sm={6}>
            <Controller render={({ field }) => <TextField {...field} label={label} fullWidth required />}
                control={control}
                name={name}
            />
        </Grid>
    )
}

export default FormInput