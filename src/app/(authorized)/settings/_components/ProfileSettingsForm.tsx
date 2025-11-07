'use client';
import { use } from 'react';
import { toast } from 'sonner';

import { useSession } from '@/auth';
import { UserAccount } from '@/types/users';
import { useForm } from '@/hooks/useForm';
import { updateUserProfileAction } from '@/actions/user';
import { Button } from '@/components/ui/button';
import { UploadIcon, SaveIcon } from '@/components/icons';
import { UserAvatar } from '@/app/_components/UserAvatar';
import { InputField } from '@/app/_components/fields/InputField';

import { getProfileSettingsFormDefaultValues, ProfileSettingsFormSchema } from './ProfileSettingsForm.schema';

type ProfileSettingsFormProps = {
  profileDataPromise: Promise<Nullable<UserAccount>>;
};

export const ProfileSettingsForm = ({ profileDataPromise }: ProfileSettingsFormProps) => {
  const profileData = use(profileDataPromise);
  const session = useSession();
  const { control, handleSubmit, formState } = useForm({
    formSchema: ProfileSettingsFormSchema,
    defaultValues: getProfileSettingsFormDefaultValues(profileData),
    mode: 'onChange',
  });

  const handleFormSubmit = handleSubmit(async (values) => {
    if (!profileData) {
      return;
    }

    const { isSuccess, errors } = await updateUserProfileAction({
      ...values,
      email: profileData.email,
    });

    if (errors && Object.keys(errors).length) {
      toast.error(String(Object.values(errors)[0]));
    }

    if (isSuccess) {
      toast.success('Profile data updated successfully!');
      session.update();
    }
  });

  if (!profileData) {
    return;
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Profile Information</h1>
        <p className="text-ds-muted-foreground text-sm">Update your personal information and profile settings</p>
      </div>
      <div className="flex items-center gap-6">
        <UserAvatar name={profileData.user.name} imageSrc={profileData.user.image || undefined} size="lg" />
        <div className="space-y-2">
          {/* TODO: Handle upload profile photo image */}
          <Button type="button" disabled variant="outline" className="gap-2 bg-transparent">
            <UploadIcon className="h-4 w-4" />
            Upload Photo
          </Button>
          <p className="text-sm text-gray-600">JPG, PNG or GIF. Max size 2MB.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <InputField disabled control={control} name="email" label="Email Address" className="gap-2" />
        <InputField control={control} name="name" label="Name" className="gap-2" />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={!formState.isValid} className="gap-2 hover:cursor-pointer">
          <SaveIcon className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </form>
  );
};
