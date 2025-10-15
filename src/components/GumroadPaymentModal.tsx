'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import './GumroadPaymentModal.css';

interface GumroadPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
  productUrl: string;
  onPaymentComplete: () => void;
}

// Translation object
const translations: Record<string, Record<string, string>> = {
  title: {
    en: 'Payment',
    ko: '결제하기',
    ja: 'お支払い',
    fr: 'Paiement',
    de: 'Zahlung',
    es: 'Pago',
    pt: 'Pagamento',
    it: 'Pagamento',
    th: 'การชำระเงิน',
    id: 'Pembayaran',
  },
  premiumPayment: {
    en: 'Premium Payment',
    ko: '프리미엄 결제',
    ja: 'プレミアム決済',
    fr: 'Paiement Premium',
    de: 'Premium-Zahlung',
    es: 'Pago Premium',
    pt: 'Pagamento Premium',
    it: 'Pagamento Premium',
    th: 'การชำระเงินพรีเมียม',
    id: 'Pembayaran Premium',
  },
  description: {
    en: 'Proceed to secure Gumroad payment page.\nPremium will be activated automatically after payment.',
    ko: '안전한 Gumroad 결제 페이지로 이동합니다.\n결제가 완료되면 자동으로 프리미엄이 활성화됩니다.',
    ja: '安全なGumroad決済ページに移動します。\n決済完了後、自動的にプレミアムが有効になります。',
    fr: 'Accédez à la page de paiement sécurisée Gumroad.\nLe Premium sera activé automatiquement après le paiement.',
    de: 'Weiter zur sicheren Gumroad-Zahlungsseite.\nPremium wird nach der Zahlung automatisch aktiviert.',
    es: 'Continuar a la página de pago segura de Gumroad.\nEl Premium se activará automáticamente después del pago.',
    pt: 'Prosseguir para a página de pagamento segura do Gumroad.\nO Premium será ativado automaticamente após o pagamento.',
    it: 'Procedi alla pagina di pagamento sicura di Gumroad.\nIl Premium verrà attivato automaticamente dopo il pagamento.',
    th: 'ดำเนินการไปยังหน้าชำระเงิน Gumroad ที่ปลอดภัย\nพรีเมียมจะเปิดใช้งานโดยอัตโนมัติหลังจากชำระเงิน',
    id: 'Lanjutkan ke halaman pembayaran Gumroad yang aman.\nPremium akan diaktifkan secara otomatis setelah pembayaran.',
  },
  payOnGumroad: {
    en: 'Pay on Gumroad',
    ko: 'Gumroad에서 결제하기',
    ja: 'Gumroadで決済',
    fr: 'Payer sur Gumroad',
    de: 'Auf Gumroad bezahlen',
    es: 'Pagar en Gumroad',
    pt: 'Pagar no Gumroad',
    it: 'Paga su Gumroad',
    th: 'ชำระเงินบน Gumroad',
    id: 'Bayar di Gumroad',
  },
  checkPayment: {
    en: '✓ Confirm Payment',
    ko: '✓ 결제 완료 확인',
    ja: '✓ 決済確認',
    fr: '✓ Confirmer le paiement',
    de: '✓ Zahlung bestätigen',
    es: '✓ Confirmar pago',
    pt: '✓ Confirmar pagamento',
    it: '✓ Conferma pagamento',
    th: '✓ ยืนยันการชำระเงิน',
    id: '✓ Konfirmasi Pembayaran',
  },
  checking: {
    en: 'Checking...',
    ko: '확인 중...',
    ja: '確認中...',
    fr: 'Vérification...',
    de: 'Überprüfung...',
    es: 'Comprobando...',
    pt: 'Verificando...',
    it: 'Verifica...',
    th: 'กำลังตรวจสอบ...',
    id: 'Memeriksa...',
  },
  creditCard: {
    en: 'Credit Card, PayPal supported',
    ko: '신용카드, PayPal 지원',
    ja: 'クレジットカード、PayPal対応',
    fr: 'Carte de crédit, PayPal pris en charge',
    de: 'Kreditkarte, PayPal unterstützt',
    es: 'Tarjeta de crédito, PayPal compatible',
    pt: 'Cartão de crédito, PayPal suportado',
    it: 'Carta di credito, PayPal supportati',
    th: 'รองรับบัตรเครดิต, PayPal',
    id: 'Kartu Kredit, PayPal didukung',
  },
  securePayment: {
    en: 'Secure payment (SSL encrypted)',
    ko: '안전한 결제 (SSL 암호화)',
    ja: '安全な決済 (SSL暗号化)',
    fr: 'Paiement sécurisé (crypté SSL)',
    de: 'Sichere Zahlung (SSL-verschlüsselt)',
    es: 'Pago seguro (cifrado SSL)',
    pt: 'Pagamento seguro (criptografado SSL)',
    it: 'Pagamento sicuro (crittografia SSL)',
    th: 'การชำระเงินที่ปลอดภัย (เข้ารหัส SSL)',
    id: 'Pembayaran aman (terenkripsi SSL)',
  },
  autoCheck: {
    en: 'Auto-check (6 times in 1 min)',
    ko: '자동 확인 (1분간 6회)',
    ja: '自動確認（1分間6回）',
    fr: 'Vérification auto (6 fois en 1 min)',
    de: 'Auto-Prüfung (6 mal in 1 Min.)',
    es: 'Verificación automática (6 veces en 1 min)',
    pt: 'Verificação automática (6 vezes em 1 min)',
    it: 'Controllo automatico (6 volte in 1 min)',
    th: 'ตรวจสอบอัตโนมัติ (6 ครั้งใน 1 นาที)',
    id: 'Pemeriksaan otomatis (6 kali dalam 1 menit)',
  },
  note: {
    en: '💡 Please click "Confirm Payment" button after completing the payment.',
    ko: '💡 결제 완료 후 "결제 완료 확인" 버튼을 클릭해주세요.',
    ja: '💡 決済完了後、「決済確認」ボタンをクリックしてください。',
    fr: '💡 Veuillez cliquer sur le bouton "Confirmer le paiement" après avoir terminé le paiement.',
    de: '💡 Bitte klicken Sie nach Abschluss der Zahlung auf die Schaltfläche "Zahlung bestätigen".',
    es: '💡 Haga clic en el botón "Confirmar pago" después de completar el pago.',
    pt: '💡 Por favor, clique no botão "Confirmar pagamento" após concluir o pagamento.',
    it: '💡 Fai clic sul pulsante "Conferma pagamento" dopo aver completato il pagamento.',
    th: '💡 กรุณาคลิกปุ่ม "ยืนยันการชำระเงิน" หลังจากชำระเงินเสร็จสิ้น',
    id: '💡 Silakan klik tombol "Konfirmasi Pembayaran" setelah menyelesaikan pembayaran.',
  },
  closeConfirm: {
    en: 'Close payment window?\n\nIf payment is complete, click "Confirm Payment" or\nwait a moment for automatic activation.',
    ko: '결제 창을 닫으시겠습니까?\n\n결제가 완료되었다면 "결제 완료 확인" 버튼을 클릭하거나\n잠시 기다리시면 자동으로 활성화됩니다.',
    ja: '決済ウィンドウを閉じますか？\n\n決済が完了している場合は、「決済確認」ボタンをクリックするか、\nしばらくお待ちください。自動的に有効化されます。',
    fr: 'Fermer la fenêtre de paiement?\n\nSi le paiement est terminé, cliquez sur "Confirmer le paiement" ou\nattendez un moment pour l\'activation automatique.',
    de: 'Zahlungsfenster schließen?\n\nWenn die Zahlung abgeschlossen ist, klicken Sie auf "Zahlung bestätigen" oder\nwarten Sie einen Moment auf die automatische Aktivierung.',
    es: '¿Cerrar ventana de pago?\n\nSi el pago está completo, haga clic en "Confirmar pago" o\nespere un momento para la activación automática.',
    pt: 'Fechar janela de pagamento?\n\nSe o pagamento estiver completo, clique em "Confirmar pagamento" ou\naguarde um momento para ativação automática.',
    it: 'Chiudere la finestra di pagamento?\n\nSe il pagamento è completato, fai clic su "Conferma pagamento" o\nattendi un momento per l\'attivazione automatica.',
    th: 'ปิดหน้าต่างการชำระเงิน?\n\nหากชำระเงินเสร็จแล้ว คลิก "ยืนยันการชำระเงิน" หรือ\nรอสักครู่เพื่อการเปิดใช้งานอัตโนมัติ',
    id: 'Tutup jendela pembayaran?\n\nJika pembayaran selesai, klik "Konfirmasi Pembayaran" atau\ntunggu sebentar untuk aktivasi otomatis.',
  },
  checkFailed: {
    en: 'Cannot check payment status. Please try again later.',
    ko: '결제 상태를 확인할 수 없습니다. 잠시 후 다시 시도해주세요.',
    ja: '決済状態を確認できません。後でもう一度お試しください。',
    fr: 'Impossible de vérifier l\'état du paiement. Veuillez réessayer plus tard.',
    de: 'Zahlungsstatus kann nicht überprüft werden. Bitte versuchen Sie es später erneut.',
    es: 'No se puede verificar el estado del pago. Por favor, inténtelo de nuevo más tarde.',
    pt: 'Não é possível verificar o status do pagamento. Por favor, tente novamente mais tarde.',
    it: 'Impossibile verificare lo stato del pagamento. Riprova più tardi.',
    th: 'ไม่สามารถตรวจสอบสถานะการชำระเงินได้ กรุณาลองอีกครั้งในภายหลัง',
    id: 'Tidak dapat memeriksa status pembayaran. Silakan coba lagi nanti.',
  },
  notConfirmed: {
    en: 'Payment not confirmed yet.\nPlease complete the payment and try again.',
    ko: '아직 결제가 확인되지 않았습니다.\n결제를 완료하신 후 다시 확인해주세요.',
    ja: 'まだ決済が確認されていません。\n決済を完了してから再度確認してください。',
    fr: 'Paiement pas encore confirmé.\nVeuillez terminer le paiement et réessayer.',
    de: 'Zahlung noch nicht bestätigt.\nBitte schließen Sie die Zahlung ab und versuchen Sie es erneut.',
    es: 'Pago aún no confirmado.\nComplete el pago e inténtelo de nuevo.',
    pt: 'Pagamento ainda não confirmado.\nConclua o pagamento e tente novamente.',
    it: 'Pagamento non ancora confermato.\nCompleta il pagamento e riprova.',
    th: 'ยังไม่ได้ยืนยันการชำระเงิน\nกรุณาทำการชำระเงินให้เสร็จสิ้นและลองอีกครั้ง',
    id: 'Pembayaran belum dikonfirmasi.\nSilakan selesaikan pembayaran dan coba lagi.',
  },
  checkError: {
    ko: '결제 확인 중 오류가 발생했습니다.',
    ja: '決済確認中にエラーが発生しました。',
    fr: "Une erreur s\'est produite lors de la vérification du paiement.",
    de: 'Bei der Überprüfung der Zahlung ist ein Fehler aufgetreten.',
    es: 'Se produjo un error al verificar el pago.',
    pt: 'Ocorreu um erro ao verificar o pagamento.',
    it: "Si è verificato un errore durante il controllo del pagamento.",
    th: 'เกิดข้อผิดพลาดระหว่างการตรวจสอบการชำระเงิน',
    id: 'Terjadi kesalahan saat memeriksa pembayaran.',
  },
  confirmationPending: {
    en: 'Payment is still processing. Please wait about 10 seconds and try again. It is usually confirmed automatically within 1 minute.',
    ko: '결제 정보를 처리하는 중입니다. 약 10초 후에 다시 시도해 주세요. 보통 1분 안에 자동으로 확인됩니다.',
    ja: '決済情報を処理中です。約10秒後にもう一度お試しください。通常1分以内に自動的に確認されます。',
    fr: 'Le paiement est en cours de traitement. Veuillez patienter environ 10 secondes et réessayer. La confirmation est généralement automatique en moins d\'une minute.',
    de: 'Zahlung wird noch bearbeitet. Bitte warten Sie ca. 10 Sekunden und versuchen Sie es erneut. Die Bestätigung erfolgt in der Regel automatisch innerhalb von 1 Minute.',
    es: 'El pago aún se está procesando. Espere unos 10 segundos y vuelva a intentarlo. Generalmente se confirma automáticamente en 1 minuto.',
    pt: 'O pagamento ainda está a ser processado. Aguarde cerca de 10 segundos e tente novamente. Geralmente, é confirmado automaticamente dentro de 1 minuto.',
    it: 'Il pagamento è ancora in fase di elaborazione. Attendi circa 10 secondi e riprova. Di solito viene confermato automaticamente entro 1 minuto.',
    th: 'กำลังดำเนินการชำระเงิน กรุณารอประมาณ 10 วินาทีแล้วลองอีกครั้ง โดยปกติจะได้รับการยืนยันโดยอัตโนมัติภายใน 1 นาที',
    id: 'Pembayaran masih diproses. Harap tunggu sekitar 10 detik dan coba lagi. Biasanya dikonfirmasi secara otomatis dalam 1 menit.',
  }
};

export const GumroadPaymentModal: React.FC<GumroadPaymentModalProps> = ({
  isOpen,
  onClose,
  sessionId,
  productUrl,
  onPaymentComplete,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const locale = useAppStore((state) => state.locale);

  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    script.id = 'gumroad-script';

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('gumroad-script');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, [isOpen]);

  // Translation helper
  const t = (key: string, params?: Record<string, any>) => {
    let text = translations[key]?.[locale] || translations[key]?.['en'] || key;
    if (params) {
      Object.keys(params).forEach((param) => {
        text = text.replace(`{{${param}}}`, params[param]);
      });
    }
    return text;
  };

  // Build Gumroad URL with session_id pre-filled
  const gumroadUrl = `${productUrl}?session_id=${sessionId}`;

  // Manual check function for button click
  const handleCheckPayment = async () => {
    setIsChecking(true);
    try {
      const response = await fetch(`/api/payment/session?sessionId=${sessionId}`);

      if (!response.ok) {
        console.error('[GumroadModal] Failed to check session status:', response.status);
        alert(t('checkFailed'));
        return;
      }

      const data = await response.json();
      console.log('[GumroadModal] Session status:', data);

      if (data.status === 'completed' && data.licenseKey) {
        console.log('[GumroadModal] ✅ Payment completed!', data.licenseKey);
        onPaymentComplete();
      } else {
        alert(t('confirmationPending'));
        // Temporarily disable button to prevent spamming
        setTimeout(() => setIsChecking(false), 5000); // Re-enable after 5 seconds
        return;
      }
    } catch (error) {
      console.error('[GumroadModal] Error checking payment status:', error);
      alert(t('checkError'));
    } finally {
      // Only re-enable if not already re-enabled by timeout
      if (isChecking) setIsChecking(false);
    }
  };

  const handleClose = () => {
    const confirmClose = window.confirm(t('closeConfirm'));
    if (!confirmClose) return;
    onClose();
  };

  if (!isOpen) return null;



  return (
    <div className="gumroad-modal-overlay" onClick={handleClose}>
      <div className="gumroad-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="gumroad-modal-header">
          <h2>{t('title')}</h2>
          <button
            className="gumroad-modal-close"
            onClick={handleClose}
            aria-label={t('title')}
          >
            ✕
          </button>
        </div>

        <div className="gumroad-modal-body">
          <div className="payment-instruction">
            <div className="payment-icon">💳</div>
            <h3>{t('premiumPayment')}</h3>


            <button className="payment-button" onClick={() => window.open(gumroadUrl, '_blank')}>
              <span className="button-icon">🔒</span>
              <span className="button-text">{t('payOnGumroad')}</span>
            </button>

            <button
              className="payment-check-button"
              onClick={handleCheckPayment}
              disabled={isChecking}
            >
              {isChecking ? t('checking') : t('checkPayment')}
            </button>

            <div className="payment-features">
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>{t('creditCard')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>{t('securePayment')}</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>{t('autoCheck')}</span>
              </div>
            </div>

            <p className="payment-note">
              {t('note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
