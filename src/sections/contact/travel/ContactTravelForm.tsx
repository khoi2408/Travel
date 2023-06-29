import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Container, Typography, Unstable_Grid2 as Grid } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// components
import Image from 'src/components/image';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

type FormValuesProps = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

// ----------------------------------------------------------------------

export default function ContactTravelForm() {
  const isMdUp = useResponsive('up', 'md');

  const TravelContactSchema = Yup.object().shape({
    fullName: Yup.string().required('Đây là trường bắt buộc'),
    email: Yup.string().required('Đây là trường bắt buộc').email('Đây không phải là email'),
    message: Yup.string().required('Đây là trường bắt buộc'),
    phone: Yup.number().required('Đây là trường bắt buộc'),
  });

  const defaultValues = {
    fullName: '',
    subject: '',
    email: '',
    message: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(TravelContactSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log('DATA', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {isMdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image
              alt="travel-contact"
              src="/assets/illustrations/illustration_travel_contact.svg"
            />
          </Grid>
        )}

        <Grid xs={12} md={6} lg={6}>
          <Stack
            spacing={2}
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h3">Liên hệ</Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Chúng tôi thường trả lời trong vòng 2 ngày
            </Typography>
          </Stack>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2.5} alignItems="flex-start">
              <RHFTextField name="fullName" label="Tên đầy đủ" />

              <RHFTextField name="phone" label="Số điện thoại" type="number"/>

              <RHFTextField name="email" label="Email" />

              <RHFTextField name="message" multiline rows={4} label="Nội dung" sx={{ pb: 2.5 }} />

              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                loading={isSubmitting}
                sx={{
                  alignSelf: { xs: 'center', md: 'unset' },
                }}
              >
                Gửi
              </LoadingButton>
            </Stack>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
}
