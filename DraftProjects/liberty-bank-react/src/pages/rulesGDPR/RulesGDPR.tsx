import { FC } from 'react';
import styles from './RulesGDPR.module.scss';
import { BackButton, Text } from '@/shared';
import { RULES_GDPR_TEXT } from './const';

const RulesGDPR: FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackButton text='Назад' />
        <Text tag='h1' className={styles.title} weight='bold'>
          Хранение персональных данных
        </Text>
        <Text tag='p' size='s' weight='regular' className={styles.text}>
          {RULES_GDPR_TEXT}
        </Text>
      </div>
    </main>
  );
};

export default RulesGDPR;
