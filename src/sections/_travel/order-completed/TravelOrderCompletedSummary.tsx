// @mui
import { Typography, Stack, Divider } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
import { fCurrency } from 'src/utils/formatNumber';
// components
import Iconify, { IconifyProps } from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelOrderCompletedSummary() {
  return (
    <Stack
      spacing={3}
      sx={{
        p: 5,
        borderRadius: 2,
        border: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h5">Chi tiết đặt phòng</Typography>

      <LineItem icon="carbon:calendar" label="Thời gian" value={fDate(new Date())} />

      <LineItem icon="carbon:events" label="Số lượng" value="2 người" />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <LineItem icon="carbon:cube" label="Mã đặt" value="KU_H8SDM" />

      <LineItem icon="carbon:calendar" label="Ngày đặt" value={fDate(new Date())} />

      <LineItem icon="carbon:receipt" label="Tổng" value={fCurrency(1112)} />

      <LineItem icon="carbon:purchase" label="Phương thức thanh toán" value="Paypal" />
    </Stack>
  );
}

// ----------------------------------------------------------------------

type LineItemProps = {
  icon: IconifyProps;
  label: string;
  value: any;
};

function LineItem({ icon, label, value }: LineItemProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ typography: 'body2', color: 'text.secondary' }}
    >
      <Iconify icon={icon} width={24} sx={{ mr: 1 }} /> {label}
      <Typography
        variant="subtitle2"
        sx={{ color: 'text.primary', flexGrow: 1, textAlign: 'right' }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
