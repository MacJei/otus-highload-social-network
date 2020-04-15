package ru.otus.highload.socialbackend.auth;

import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.otus.highload.socialbackend.domain.User;
import ru.otus.highload.socialbackend.feature.user.UserRepository;

import javax.annotation.Resource;
import java.util.Collections;
import java.util.Optional;


@Service
public class AuthManager implements AuthenticationManager {

    private org.slf4j.Logger logger = LoggerFactory.getLogger(this.getClass());

    @Resource
    private UserRepository userRepository;

    @Override
    @Transactional
    public Authentication authenticate(final Authentication auth) throws AuthenticationException {
        if (auth.getPrincipal() == null || auth.getCredentials() == null) {
            throw new RuntimeException("Cannot find login information in authentication given.");
        }


        String login = auth.getPrincipal().toString();

        Optional<User> maybeUser = userRepository.getByLogin(login);
        if (maybeUser.isPresent()) {
            User user = maybeUser.get();
            // todo check password
            Optional<UsernamePasswordAuthenticationToken> authToken =
                    Optional.of(new UsernamePasswordAuthenticationToken(user, auth.getCredentials(), Collections.emptyList()));
            return authToken.get();

//            if ("user".equals(login)) {
//                return new UsernamePasswordAuthenticationToken("user", "user");
//            } else {
//                throw new BadCredentialsException("AuthenticatioError.pass.incorrect");
//            }

        }
        throw new BadCredentialsException("AuthenticatioError.pass.incorrect");

    }
}