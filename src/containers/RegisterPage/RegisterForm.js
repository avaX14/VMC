import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import translate from 'i18n/translate';

export default function RegisterForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="register-form">
        <div className="mr-5">
          <h3 className="mb-4">{translate('contactData')}</h3>

          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="User name"
              name="userName"
              ref={register({ required: true, max: 30 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.userName && (
              <p className="error-message">{translate('requiredField')}</p>
            )}
          </div>

          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="First name"
              name="firstName"
              ref={register({ required: true, maxLength: 80 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.firstName && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="Last name"
              name="lastName"
              ref={register({ required: true, maxLength: 100 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.lastName && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.email && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              ref={register({ required: true, max: 20, min: 6 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.password && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="password"
              placeholder="Confirm password"
              name="password2"
              ref={register({ required: true, max: 20, min: 6 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.password2 && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="tel"
              placeholder="Mobile number"
              name="Mobile number"
              ref={register({ maxLength: 15 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="Title"
              ref={register}
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Position"
              name="Position"
              ref={register({ max: 40 })}
            />
          </div>
        </div>

        <div className="verticalLine"></div>

        <div className="company-info ml-5">
          <h3 className="mb-4">{translate('companyData')}</h3>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="Ime kompanije"
              name="companyName"
              ref={register({ required: true, max: 20, min: 6 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.companyName && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Adresa"
              name="companyAddress"
              ref={register({ required: true, max: 20, min: 6 })}
            />
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="Grad"
              name="companyTown"
              ref={register({ required: true, max: 20, min: 6 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.companyTown && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group position-relative">
            <input
              className="form-control"
              type="text"
              placeholder="Telefon"
              name="companyPhone"
              ref={register({ required: true, max: 20, min: 6 })}
            />
            <span
              className="position-absolute"
              style={{ top: '0', right: '5px', color: 'red' }}
            >
              *
            </span>
            {errors.companyPhone && (
              <p className="error-message">Your input is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Adresa"
              name="companyFax"
              ref={register({ required: true, max: 20, min: 6 })}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Adresa"
              name="webAddress"
              ref={register({ required: true, max: 20, min: 6 })}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mt-5">
        {translate('submit')}
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
