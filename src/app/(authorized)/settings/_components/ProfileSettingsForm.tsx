'use client';
import { use } from 'react';

import { useSession } from '@/auth';
import { showErrorNotification, showSuccessNotification } from '@/notifications';
import { updateUserProfileAction } from '@/actions/user';
import { UserAccount } from '@/types/users';
import { getFirstErrorMessage } from '@/utils/errors';
import { useForm } from '@/hooks/useForm';
import { Button } from '@/components/ui/button';
import { SaveIcon } from '@/components/icons';
import { InputField } from '@/app/_components/fields/InputField';
import { ProfilePhotoUploadField } from '@/app/_components/fields/ProfilePhotoUploadField';

import { getProfileSettingsFormDefaultValues, ProfileSettingsFormSchema } from './ProfileSettingsForm.schema';

type ProfileSettingsFormProps = {
  profileDataPromise: Promise<Nullable<UserAccount>>;
};

export const ProfileSettingsForm = ({ profileDataPromise }: ProfileSettingsFormProps) => {
  const profileData = use(profileDataPromise);
  const session = useSession();
  const { control, handleSubmit, formState, reset } = useForm({
    formSchema: ProfileSettingsFormSchema,
    defaultValues: getProfileSettingsFormDefaultValues(profileData),
  });

  const handleFormReset = () => {
    reset();
  };

  const handleFormSubmit = handleSubmit(async (values) => {
    if (!profileData) {
      return;
    }

    const { isSuccess, errors } = await updateUserProfileAction({
      ...values,
      email: profileData.email,
    });

    const errorMessage = getFirstErrorMessage(errors);

    if (errorMessage) {
      showErrorNotification(errorMessage);
    }

    if (isSuccess) {
      showSuccessNotification('Profile data updated successfully!');
      session.update();
    }
  });

  if (!profileData) {
    return;
  }

  return (
    <form onSubmit={handleFormSubmit} onReset={handleFormReset} className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Profile Information</h1>
        <p className="text-ds-muted-foreground text-sm">Update your personal information and profile settings</p>
      </div>

      <ProfilePhotoUploadField
        control={control}
        name="image"
        label="Upload Photo"
        className="flex items-center gap-6"
        userName={profileData.user.name}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputField disabled control={control} name="email" label="Email Address" className="gap-2" />
        <InputField control={control} name="name" label="Name" className="gap-2" />
      </div>

      <div className="flex justify-end gap-2">
        <Button type="reset" variant="secondary" disabled={!formState.isDirty} className="hover:cursor-pointer">
          Reset
        </Button>
        <Button type="submit" disabled={!formState.isValid} className="hover:cursor-pointer">
          <SaveIcon className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </form>
  );
};
