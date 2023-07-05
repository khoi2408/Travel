// @mui
import { Stack, Switch, Collapse, Typography, FormControlLabel } from '@mui/material';
// components
import { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

type Props = {
  sameBilling: boolean;
  onChangeSameBilling: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TravelCheckOutShippingForm({ sameBilling, onChangeSameBilling }: Props) {
  return (
    <Stack spacing={5}>
      <div>
        <Typography variant="overline" sx={{ color: 'text.secondary', mb: 3, display: 'block' }}>
          Địa chỉ thanh toán
        </Typography>

        <Stack spacing={2.5}>
          <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
            <RHFTextField name="billingAddress.fullName" label="Tên đầy đủ" />
            <RHFTextField name="billingAddress.phone" label="Số điện thoại" type="number"/>
          </Stack>
          <RHFTextField name="billingAddress.fullAddress" label="Địa chỉ 1" />
          <RHFTextField name="billingAddress.fullAddress2" label="Địa chỉ 2" />
        </Stack>
      </div>

      <div>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="overline" sx={{ color: 'text.secondary' }}>
            Địa chỉ giao hàng
          </Typography>
          <FormControlLabel
            control={<Switch checked={sameBilling} onChange={onChangeSameBilling} />}
            label="Tương tự như Địa chỉ thanh toán"
            labelPlacement="start"
          />
        </Stack>

        <Collapse
          in={!sameBilling}
          unmountOnExit
          sx={{
            ...(!sameBilling && { mt: 3 }),
          }}
        >
          <Stack spacing={2.5}>
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: 'column', md: 'row' }}>
              <RHFTextField name="shippingAddress.fullName" label="Tên đầy đủ" />
              <RHFTextField name="shippingAddress.phone" label="Số điện thoại" type="number"/>
            </Stack>
            <RHFTextField name="shippingAddress.fullAddress" label="Địa chỉ 1" />
            <RHFTextField name="shippingAddress.fullAddress2" label="Địa chỉ 2" />
          </Stack>
        </Collapse>
      </div>
    </Stack>
  );
}
