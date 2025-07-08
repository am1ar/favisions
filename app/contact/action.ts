"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "re_YOUR_RESEND_API_KEY")

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { success: false, message: "الرجاء تعبئة جميع الحقول المطلوبة." }
  }

  if (!email.includes("@") || !email.includes(".")) {
    return { success: false, message: "الرجاء إدخال بريد إلكتروني صحيح." }
  }

  try {
    console.log("Attempting to send email...")
    console.log(`To: ammaralboraei@gmail.com`)
    console.log(`From: ${email} (${name})`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)

    // Uncomment and configure this section for actual email sending with Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender email
      to: 'ammaralboraei@gmail.com',
      subject: `رسالة من شركة رؤى بعيدة: ${subject}`,
      html: `
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>الموضوع:</strong> ${subject}</p>
        <p><strong>الرسالة:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, message: 'حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة لاحقاً.' };
    }

    await new Promise((resolve) => setTimeout(resolve, 1500))

    return { success: true, message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً." }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { success: false, message: "حدث خطأ غير متوقع. الرجاء المحاولة لاحقاً." }
  }
}
