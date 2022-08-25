import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';


type InputFieldProps = {
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: any;
  label?: string;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, className, registration} = props;
  return (
    <div>
    <label className={clsx('block text-sm font-medium text-gray-700', className)}>
      {label}
      <div className="mt-1">
      <input
        type={type}
        className={clsx(
          'appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </div>
    </label>
    </div>
  );
};
