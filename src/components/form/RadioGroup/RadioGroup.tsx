import React, { FC } from 'react';
import { RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@mui/material';

export type TRadioData = {
  value: string | number;
  label: string;
};

export interface IRadioGroup {
  data: TRadioData[];
  ariaLabelledby?: string;
  name?: string;
}

const RadioGroup: FC<IRadioGroup> = ({ data, ariaLabelledby, name }) => {
  return (
    <MuiRadioGroup aria-labelledby={ariaLabelledby} name={name}>
      {data.map((radioItem) => (
        <FormControlLabel
          key={radioItem.value}
          value={radioItem.value}
          control={<Radio />}
          label={radioItem.label}
        />
      ))}
    </MuiRadioGroup>
  );
};

export default RadioGroup;
