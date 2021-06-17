import React from 'react';
import {
    FooterStyled,
    FooterContainer,
    FooterTitle,
    AppList,
} from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px' }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        E-Diaristas te ajuda a encontrar um profissional
                        perfeito para realizar a limpeza da sua casa. Garantimos
                        a melhor profissional com total segurança e praticidade!
                        São milhares de clientes satisfeitos por todo o país.
                    </Typography>

                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                </Box>
                <div>
                    <AppList>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img src={'/img/logos/app-store.png'} />
                            </a>
                        </li>
                        <li>
                            <a
                                href={'/'}
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                            >
                                <img src={'/img/logos/google-play.png'} />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;
