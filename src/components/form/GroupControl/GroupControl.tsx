import React, { FC } from 'react';
import { FormControl } from '@mui/material';
import { RadioGroup, TRadioData } from '../RadioGroup';

type TVariant = 'checkbox' | 'radio';

interface IGroupControl {
  variant?: TVariant;
  data: TRadioData[];
}

const GroupControl: FC<IGroupControl> = ({ variant = 'radio', data }) => {
  return (
    <FormControl sx={{ marginBottom: 2, display: 'block' }}>
      {variant === 'radio' && <RadioGroup data={data} />}
    </FormControl>
  );
};

export default GroupControl;
