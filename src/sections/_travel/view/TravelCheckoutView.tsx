import * as Yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Stack, Divider, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { ITourCheckoutProps } from 'src/types/tour';
// _mock
import { _tours } from 'src/_mock';
// components
import FormProvider from 'src/components/hook-form';
//
import {
  TravelCheckOutSummary,
  TravelCheckOutPaymentForm,
  TravelCheckOutShippingForm,
} from '../checkout';

// ----------------------------------------------------------------------

type FormValuesProps = ITourCheckoutProps;

export default function TravelCheckoutView() {
  const { replace } = useRouter();

  const [sameBilling, setSameBilling] = useState(false);

  const [departureDay, setDepartureDay] = useState<Date | null>(new Date());

  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
  });

  const TravelCheckoutSchema = Yup.object().shape({
    billingAddress: Yup.object().shape({
      fullName: Yup.string().required('Đây là trường bắt buộc'),
      phone: Yup.string().required('Đây là trường bắt buộc'),
      fullAddress: Yup.string().required('Đây là trường bắt buộc'),
    }),
  });

  const defaultValues = {
    billingAddress: {
      fullName: '',
      phone: '',
      fullAddress: '',
      fullAddress2: '',
    },
    shippingAddress: {
      fullName: '',
      phone: '',
      fullAddress: '',
      fullAddress2: '',
    },
    paymentMethods: {
      methods: 'paypal',
      card: {
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        ccv: '',
      },
    },
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(TravelCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      replace(paths.orderCompleted);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeDepartureDay = (newValue: Date | null) => {
    setDepartureDay(newValue);
  };

  const handleIncrementGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({ ...guests, children: guests.children + 1 });
    } else {
      setGuests({ ...guests, adults: guests.adults + 1 });
    }
  };

  const handleDecreaseGuests = (guest?: string) => {
    if (guest === 'children') {
      setGuests({ ...guests, children: guests.children - 1 });
    } else {
      setGuests({ ...guests, adults: guests.adults - 1 });
    }
  };

  const handleChangeSameBilling = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSameBilling(event.target.checked);
  };

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 8, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: 5 }}>
        Xác nhận và thanh toán
      </Typography>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={7}>
            <Stack>
              <StepLabel title="Thông tin vận chuyển" step="1" />

              <TravelCheckOutShippingForm
                sameBilling={sameBilling}
                onChangeSameBilling={handleChangeSameBilling}
              />

              <Divider sx={{ my: 5, borderStyle: 'dashed' }} />

              <StepLabel title="Phương thức thanh toán" step="2" />

              <TravelCheckOutPaymentForm />
            </Stack>
          </Grid>

          <Grid xs={12} md={5}>
            <TravelCheckOutSummary
              guests={guests}
              tour={_tours[0]}
              departureDay={departureDay}
              isSubmitting={isSubmitting}
              onDecreaseGuests={handleDecreaseGuests}
              onIncrementGuests={handleIncrementGuests}
              onChangeDepartureDay={handleChangeDepartureDay}
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}

// ----------------------------------------------------------------------

type StepLabelProps = {
  step: string;
  title: string;
};

function StepLabel({ step, title }: StepLabelProps) {
  return (
    <Stack direction="row" alignItems="center" sx={{ mb: 3, typography: 'h5' }}>
      <Box
        sx={{
          mr: 1.5,
          width: 28,
          height: 28,
          flexShrink: 0,
          display: 'flex',
          typography: 'h6',
          borderRadius: '50%',
          alignItems: 'center',
          bgcolor: 'primary.main',
          justifyContent: 'center',
          color: 'primary.contrastText',
        }}
      >
        {step}
      </Box>
      {title}
    </Stack>
  );
}
