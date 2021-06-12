import SafeEnvironment from 'ui/components/fallback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />

            <UserInformation
                name={'Aran Leite'}
                picture={'https://github.com/hyoretsu.png'}
                rating={3}
                description={'João Pessoa'}
            />
        </div>
    );
}
