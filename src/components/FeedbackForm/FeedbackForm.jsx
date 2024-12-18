import React, { useState } from 'react';
import ButtonUI from 'components/UI/Button/ButtonUI';
import { useTranslation } from 'react-i18next';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const FeedbackForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicId = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  console.log('Service ID:' + serviceId + '----');
  console.log('Template ID:' + templateId + '----');
  console.log('Public ID:' + publicId + '----');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSending(true);
    setError('');
    setSuccess('');

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        formData,
        publicId
      );
      console.log('Success:', result.text);
      setSuccess(t('message_sent_successfully'));
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
      console.error('Error:', err);
      setError(t('something_went_wrong'));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">{t('your_name')}:</label>
      <input
        type="text"
        id="name"
        name="from_name"
        placeholder={t('your_name')}
        value={formData.from_name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">{t('your_email')}:</label>
      <input
        type="email"
        id="email"
        name="from_email"
        placeholder="example@gmail.com"
        value={formData.from_email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="message">{t('your_message')}:</label>
      <textarea
        id="message"
        name="message"
        placeholder={t('your_message')}
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>

      <ButtonUI type="submit">{isSending ? t('sending') : t('send')}</ButtonUI>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default FeedbackForm;
